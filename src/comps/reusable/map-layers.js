export function mapLayers(map, geolocate) {
  // Set background onload & color
  const backgroundColorPicker = document.getElementById("color-picker");
  const backgroundAlphaPicker = document.getElementById("alpha-picker"); // Add an alpha picker
  let backgroundColor = localStorage.getItem("backgroundColor") || "#2a4f24";
  let backgroundAlpha = localStorage.getItem("backgroundAlpha") || 1; // Default alpha value

  if (localStorage.getItem("countyToggle") === null) {
    localStorage.setItem("countyToggle", "true");
  }
  if (localStorage.getItem("stateToggle") === null) {
    localStorage.setItem("stateToggle", "true");
  }
  if (localStorage.getItem("countryToggle") === null) {
    localStorage.setItem("countryToggle", "true");
  }

  // Set the color picker to match the saved color
  backgroundColorPicker.value = backgroundColor;
  backgroundAlphaPicker.value = backgroundAlpha;

  // Update the background color when the map loads
  map.on("load", () => {
    const rgbaColor = hexToRgba(backgroundColor, backgroundAlpha);
    map.setPaintProperty("background-1", "background-color", rgbaColor);
  });

  // Update the background color when the color picker changes
  backgroundColorPicker.addEventListener("input", (e) => {
    backgroundColor = e.target.value;
    const rgbaColor = hexToRgba(backgroundColor, backgroundAlpha);
    map.setPaintProperty("background-1", "background-color", rgbaColor);
    localStorage.setItem("backgroundColor", backgroundColor);
  });

  // Update the background alpha when the alpha picker changes
  backgroundAlphaPicker.addEventListener("input", (e) => {
    backgroundAlpha = parseFloat(e.target.value);
    const rgbaColor = hexToRgba(backgroundColor, backgroundAlpha);
    map.setPaintProperty("background-1", "background-color", rgbaColor);
    localStorage.setItem("backgroundAlpha", backgroundAlpha);
  });

  // Helper function to convert hex color to rgba
  function hexToRgba(hexColor, alpha) {
    const hex = hexColor.replace(/^#/, "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const contourToggle = document.getElementById("contour-toggle");

  // Get saved toggle state
  const savedContourState = localStorage.getItem("contourToggle") === "true";
  contourToggle.checked = savedContourState;

  // Update contour visibility when map loads
  map.on("load", () => {
    if (map.getLayer("contour-label") && map.getLayer("contour-line")) {
      const visibility = savedContourState ? "visible" : "none";
      map.setLayoutProperty("contour-label", "visibility", visibility);
      map.setLayoutProperty("contour-line", "visibility", visibility);
    }
  });

  // Update contour visibility when toggle changes
  contourToggle.addEventListener("change", (e) => {
    if (map.getLayer("contour-label") && map.getLayer("contour-line")) {
      const visibility = e.target.checked ? "visible" : "none";
      map.setLayoutProperty("contour-label", "visibility", visibility);
      map.setLayoutProperty("contour-line", "visibility", visibility);
      localStorage.setItem("contourToggle", e.target.checked);
    }
  });

  // Wait for the map to load
  map.on("style.load", () => {
    if (map.getLayer("background-1")) {
      map.setLayoutProperty("background-1", "visibility", "visible");
    }

    // Add event listeners to the toggle buttons
    if (map.getLayer("mapbox-satellite")) {
      const savedSatelliteState =
        localStorage.getItem("satellite-toggle") === "true";
      map.setLayoutProperty(
        "mapbox-satellite",
        "visibility",
        savedSatelliteState ? "visible" : "none"
      );
      document.getElementById("satellite-toggle").checked = savedSatelliteState;
    }

    document
      .getElementById("satellite-toggle")
      .addEventListener("change", (e) => {
        if (map.getLayer("mapbox-satellite")) {
          const visibility = e.target.checked ? "visible" : "none";
          map.setLayoutProperty("mapbox-satellite", "visibility", visibility);
          localStorage.setItem("satellite-toggle", e.target.checked);
        }
      });

    // Major city style onload
    if (map.getLayer("settlement-major-label")) {
      const savedFont = localStorage.getItem("majorCityFont") || "Lato";
      const savedFontWeight =
        localStorage.getItem("majorCityFontWeight") || "Regular";
      const savedTextSize =
        parseInt(localStorage.getItem("majorCityTextSize")) || 18;
      const savedTextColor =
        localStorage.getItem("majorCityTextColor") || "#000000";
      const savedHaloColor =
        localStorage.getItem("majorCityHaloColor") || "#ffffff";

      map.setLayoutProperty(
        "settlement-major-label",
        "text-size",
        savedTextSize
      );
      map.setLayoutProperty("settlement-major-label", "text-font", [
        `${savedFont} ${savedFontWeight}`,
      ]);
      map.setPaintProperty(
        "settlement-major-label",
        "text-color",
        savedTextColor
      );
      map.setPaintProperty(
        "settlement-major-label",
        "text-halo-color",
        savedHaloColor
      );
      map.setPaintProperty("settlement-major-label", "text-halo-width", 1);

      document.getElementById("text-font-select").value = savedFont;
      document.getElementById("font-weight-select").value = savedFontWeight;
      document.getElementById("text-size-input").value = savedTextSize;
      document.getElementById("major-city-text-color").value = savedTextColor;
      document.getElementById("major-city-halo-color").value = savedHaloColor;
    }

    // Major city style after toggle
    document
      .getElementById("settlement-major-label-toggle")
      .addEventListener("change", (e) => {
        if (e.target.checked) {
          // Show the settlement-major-label layer
          if (map.getLayer("settlement-major-label")) {
            map.setLayoutProperty(
              "settlement-major-label",
              "visibility",
              "visible"
            );
          }
        } else {
          // Hide the settlement-major-label layer
          if (map.getLayer("settlement-major-label")) {
            map.setLayoutProperty(
              "settlement-major-label",
              "visibility",
              "none"
            );
          }
        }
      });

    // Update font properties function
    function updateFontProperties() {
      if (map.getLayer("settlement-major-label")) {
        const selectedFont = document.getElementById("text-font-select").value;
        const selectedWeight =
          document.getElementById("font-weight-select").value;
        const selectedSize = parseInt(
          document.getElementById("text-size-input").value
        );
        const selectedTextColor = document.getElementById(
          "major-city-text-color"
        ).value;
        const selectedHaloColor = document.getElementById(
          "major-city-halo-color"
        ).value;

        map.setLayoutProperty("settlement-major-label", "text-font", [
          `${selectedFont} ${selectedWeight}`,
        ]);
        map.setLayoutProperty(
          "settlement-major-label",
          "text-size",
          selectedSize
        );
        map.setPaintProperty(
          "settlement-major-label",
          "text-color",
          selectedTextColor
        );
        map.setPaintProperty(
          "settlement-major-label",
          "text-halo-color",
          selectedHaloColor
        );

        localStorage.setItem("majorCityFont", selectedFont);
        localStorage.setItem("majorCityFontWeight", selectedWeight);
        localStorage.setItem("majorCityTextSize", selectedSize);
        localStorage.setItem("majorCityTextColor", selectedTextColor);
        localStorage.setItem("majorCityHaloColor", selectedHaloColor);
      }
    }

    // Add event listeners
    document
      .getElementById("text-font-select")
      .addEventListener("change", updateFontProperties);
    document
      .getElementById("font-weight-select")
      .addEventListener("change", updateFontProperties);
    document
      .getElementById("text-size-input")
      .addEventListener("input", updateFontProperties);
    document
      .getElementById("major-city-text-color")
      .addEventListener("input", updateFontProperties);
    document
      .getElementById("major-city-halo-color")
      .addEventListener("input", updateFontProperties);

    // Minor city style onload
    if (map.getLayer("settlement-minor-label")) {
      const savedFont =
        localStorage.getItem("minorCityFont") || "Arial Unicode MS";
      const savedFontWeight =
        localStorage.getItem("minorCityFontWeight") || "Bold";
      const savedTextSize =
        parseInt(localStorage.getItem("minorCityTextSize")) || 12;
      const savedTextColor =
        localStorage.getItem("minorCityTextColor") || "#000000";
      const savedHaloColor =
        localStorage.getItem("minorCityHaloColor") || "#ffffff";

      map.setLayoutProperty(
        "settlement-minor-label",
        "text-size",
        savedTextSize
      );
      map.setLayoutProperty("settlement-minor-label", "text-font", [
        `${savedFont} ${savedFontWeight}`,
      ]);
      map.setPaintProperty(
        "settlement-minor-label",
        "text-color",
        savedTextColor
      );
      map.setPaintProperty(
        "settlement-minor-label",
        "text-halo-color",
        savedHaloColor
      );
      map.setPaintProperty("settlement-minor-label", "text-halo-width", 1);

      document.getElementById("minor-text-font-select").value = savedFont;
      document.getElementById("minor-font-weight-select").value =
        savedFontWeight;
      document.getElementById("minor-text-size-input").value = savedTextSize;
      document.getElementById("minor-city-text-color").value = savedTextColor;
      document.getElementById("minor-city-halo-color").value = savedHaloColor;
    }

    // Minor city style after toggle
    document
      .getElementById("settlement-minor-label")
      .addEventListener("change", (e) => {
        if (e.target.checked) {
          // Show the settlement-minor-label layer
          if (!map.getLayer("settlement-minor-label")) {
            map.addLayer({
              id: "settlement-minor-label",
              type: "symbol",
              source: "composite",
              "source-layer": "place",
              layout: {
                "text-field": ["get", "name"],
                visibility: "visible",
                "text-size": 12,
              },
              filter: ["==", ["get", "class"], "settlement-minor-label"],
            });
          } else {
            map.setLayoutProperty(
              "settlement-minor-label",
              "visibility",
              "visible"
            );
          }
        } else {
          // Hide the settlement-minor-label layer
          if (map.getLayer("settlement-minor-label")) {
            map.setLayoutProperty(
              "settlement-minor-label",
              "visibility",
              "none"
            );
          }
        }
      });

    // Update font properties function for minor city labels
    function updateMinorCityFontProperties() {
      if (map.getLayer("settlement-minor-label")) {
        const selectedFont = document.getElementById(
          "minor-text-font-select"
        ).value;
        const selectedWeight = document.getElementById(
          "minor-font-weight-select"
        ).value;
        const selectedSize = parseInt(
          document.getElementById("minor-text-size-input").value
        );
        const selectedTextColor = document.getElementById(
          "minor-city-text-color"
        ).value;
        const selectedHaloColor = document.getElementById(
          "minor-city-halo-color"
        ).value;

        map.setLayoutProperty("settlement-minor-label", "text-font", [
          `${selectedFont} ${selectedWeight}`,
        ]);
        map.setLayoutProperty(
          "settlement-minor-label",
          "text-size",
          selectedSize
        );
        map.setPaintProperty(
          "settlement-minor-label",
          "text-color",
          selectedTextColor
        );
        map.setPaintProperty(
          "settlement-minor-label",
          "text-halo-color",
          selectedHaloColor
        );

        localStorage.setItem("minorCityFont", selectedFont);
        localStorage.setItem("minorCityFontWeight", selectedWeight);
        localStorage.setItem("minorCityTextSize", selectedSize);
        localStorage.setItem("minorCityTextColor", selectedTextColor);
        localStorage.setItem("minorCityHaloColor", selectedHaloColor);
      }
    }

    // Add event listeners for minor city labels
    document
      .getElementById("minor-text-font-select")
      .addEventListener("change", updateMinorCityFontProperties);
    document
      .getElementById("minor-font-weight-select")
      .addEventListener("change", updateMinorCityFontProperties);
    document
      .getElementById("minor-text-size-input")
      .addEventListener("input", updateMinorCityFontProperties);
    document
      .getElementById("minor-city-text-color")
      .addEventListener("input", updateMinorCityFontProperties);
    document
      .getElementById("minor-city-halo-color")
      .addEventListener("input", updateMinorCityFontProperties);

    // county style onload
    if (map.getLayer("admin-2-boundary")) {
      const savedCountyLineColor =
        localStorage.getItem("countyLineColor") || "#000";
      const savedCountyLineWidth = localStorage.getItem("countyLineWidth") || 1;
      map.setPaintProperty(
        "admin-2-boundary",
        "line-color",
        savedCountyLineColor
      );
      map.setPaintProperty(
        "admin-2-boundary",
        "line-width",
        parseFloat(savedCountyLineWidth)
      );
      map.setPaintProperty("admin-2-boundary", "line-dasharray", [1, 0]);
      document.getElementById("line-color").value = savedCountyLineColor;
      document.getElementById("line-width").value = savedCountyLineWidth;
      document.getElementById("line-width-value").textContent =
        savedCountyLineWidth;
    }

    // county toggle
    document
      .getElementById("admin-2-boundary-toggle")
      .addEventListener("change", (e) => {
        if (e.target.checked) {
          // Show the admin-2-boundary layer
          if (!map.getLayer("admin-2-boundary")) {
            map.addLayer({
              id: "admin-2-boundary",
              type: "line",
              source: "composite",
              "source-layer": "admin",
              layout: {
                visibility: "visible",
              },
              filter: ["==", ["get", "admin_level"], 2],
            });
          } else {
            map.setLayoutProperty("admin-2-boundary", "visibility", "visible");
          }
          localStorage.setItem("countyToggle", true);
        } else {
          // Hide the admin-2-boundary layer
          if (map.getLayer("admin-2-boundary")) {
            map.setLayoutProperty("admin-2-boundary", "visibility", "none");
          }
          localStorage.setItem("countyToggle", false);
        }
      });

    // Load saved toggle value on page load
    if (
      localStorage.getItem("countyToggle") === "true" ||
      localStorage.getItem("countyToggle") === null
    ) {
      document.getElementById("admin-2-boundary-toggle").checked = true;
      if (map.getLayer("admin-2-boundary")) {
        map.setLayoutProperty("admin-2-boundary", "visibility", "visible");
      }
    } else {
      document.getElementById("admin-2-boundary-toggle").checked = false;
      if (map.getLayer("admin-2-boundary")) {
        map.setLayoutProperty("admin-2-boundary", "visibility", "none");
      }
    }

    // county color picker and width
    const colorPicker = document.getElementById("line-color");
    const widthSlider = document.getElementById("line-width");
    const widthValueSpan = document.getElementById("line-width-value");

    // Update the line color and width when the color picker or slider changes
    colorPicker.addEventListener("input", (e) => {
      if (map.getLayer("admin-2-boundary")) {
        map.setPaintProperty("admin-2-boundary", "line-color", e.target.value);
        localStorage.setItem("countyLineColor", e.target.value);
      }
    });

    widthSlider.addEventListener("input", (e) => {
      if (map.getLayer("admin-2-boundary")) {
        map.setPaintProperty(
          "admin-2-boundary",
          "line-width",
          parseFloat(e.target.value)
        );
        localStorage.setItem("countyLineWidth", e.target.value);
      }
      widthValueSpan.textContent = e.target.value;
    });

    // state border onload
    if (map.getLayer("admin-1-boundary")) {
      const savedStateLineColor =
        localStorage.getItem("stateLineColor") || "#000";
      const savedStateLineWidth = localStorage.getItem("stateLineWidth") || 1;
      map.setPaintProperty(
        "admin-1-boundary",
        "line-color",
        savedStateLineColor
      );
      map.setPaintProperty(
        "admin-1-boundary",
        "line-width",
        parseFloat(savedStateLineWidth)
      );
      map.setPaintProperty("admin-1-boundary", "line-dasharray", [1, 0]);
      document.getElementById("admin-1-line-color").value = savedStateLineColor;
      document.getElementById("admin-1-line-width").value = savedStateLineWidth;
      document.getElementById("admin-1-width-value").textContent =
        savedStateLineWidth;
    }

    // state toggle
    document
      .getElementById("admin-1-boundary-toggle")
      .addEventListener("change", (e) => {
        if (e.target.checked) {
          // Show the admin-1-boundary layer
          if (!map.getLayer("admin-1-boundary")) {
            map.addLayer({
              id: "admin-1-boundary",
              type: "line",
              source: "composite",
              "source-layer": "admin",
              layout: {
                visibility: "visible",
              },
              filter: [
                "all",
                ["==", ["get", "admin_level"], 2],
                ["==", ["get", "maritime_boundary"], false],
              ],
            });
          } else {
            map.setLayoutProperty("admin-1-boundary", "visibility", "visible");
          }
          localStorage.setItem("stateToggle", true);
        } else {
          // Hide the admin-1-boundary layer
          if (map.getLayer("admin-1-boundary")) {
            map.setLayoutProperty("admin-1-boundary", "visibility", "none");
          }
          localStorage.setItem("stateToggle", false);
        }
      });

    // Load saved toggle value on page load
    if (
      localStorage.getItem("stateToggle") === "true" ||
      localStorage.getItem("stateToggle") === null
    ) {
      document.getElementById("admin-1-boundary-toggle").checked = true;
      if (map.getLayer("admin-1-boundary")) {
        map.setLayoutProperty("admin-1-boundary", "visibility", "visible");
      }
    } else {
      document.getElementById("admin-1-boundary-toggle").checked = false;
      if (map.getLayer("admin-1-boundary")) {
        map.setLayoutProperty("admin-1-boundary", "visibility", "none");
      }
    }

    // state color picker and width
    const admin1ColorPicker = document.getElementById("admin-1-line-color");
    const admin1WidthSlider = document.getElementById("admin-1-line-width");
    const admin1WidthValueSpan = document.getElementById("admin-1-width-value");

    // Update the line color and width when the color picker or slider changes
    admin1ColorPicker.addEventListener("input", (e) => {
      if (map.getLayer("admin-1-boundary")) {
        map.setPaintProperty("admin-1-boundary", "line-color", e.target.value);
        localStorage.setItem("stateLineColor", e.target.value);
      }
    });

    admin1WidthSlider.addEventListener("input", (e) => {
      if (map.getLayer("admin-1-boundary")) {
        map.setPaintProperty(
          "admin-1-boundary",
          "line-width",
          parseFloat(e.target.value)
        );
        localStorage.setItem("stateLineWidth", e.target.value);
      }
      admin1WidthValueSpan.textContent = e.target.value;
    });

    // country border onload
    if (map.getLayer("admin-0-boundary")) {
      const savedCountryLineColor =
        localStorage.getItem("countryLineColor") || "#000000";
      const savedCountryLineWidth =
        localStorage.getItem("countryLineWidth") || 1;
      map.setPaintProperty(
        "admin-0-boundary",
        "line-color",
        savedCountryLineColor
      );
      map.setPaintProperty(
        "admin-0-boundary",
        "line-width",
        parseFloat(savedCountryLineWidth)
      );
      map.setPaintProperty("admin-0-boundary", "line-dasharray", [1, 0]);
      document.getElementById("admin-0-line-color").value =
        savedCountryLineColor;
      document.getElementById("admin-0-line-width").value =
        savedCountryLineWidth;
      document.getElementById("admin-0-width-value").textContent =
        savedCountryLineWidth;
    }

    // country toggle
    document
      .getElementById("admin-0-boundary-toggle")
      .addEventListener("change", (e) => {
        if (e.target.checked) {
          // Show the admin-0-boundary layer
          if (!map.getLayer("admin-0-boundary")) {
            map.addLayer({
              id: "admin-0-boundary",
              type: "line",
              source: "composite",
              "source-layer": "admin",
              layout: {
                visibility: "visible",
              },
              filter: [
                "all",
                ["==", ["get", "admin_level"], 2],
                ["==", ["get", "maritime_boundary"], false],
              ],
            });
          } else {
            map.setLayoutProperty("admin-0-boundary", "visibility", "visible");
          }
          localStorage.setItem("countryToggle", true);
        } else {
          // Hide the admin-0-boundary layer
          if (map.getLayer("admin-0-boundary")) {
            map.setLayoutProperty("admin-0-boundary", "visibility", "none");
          }
          localStorage.setItem("countryToggle", false);
        }
      });

    // Load saved toggle value on page load
    if (
      localStorage.getItem("countryToggle") === "true" ||
      localStorage.getItem("countryToggle") === null
    ) {
      document.getElementById("admin-0-boundary-toggle").checked = true;
      if (map.getLayer("admin-0-boundary")) {
        map.setLayoutProperty("admin-0-boundary", "visibility", "visible");
      }
    } else {
      document.getElementById("admin-0-boundary-toggle").checked = false;
      if (map.getLayer("admin-0-boundary")) {
        map.setLayoutProperty("admin-0-boundary", "visibility", "none");
      }
    }

    // country color picker and width
    const admin0ColorPicker = document.getElementById("admin-0-line-color");
    const admin0WidthSlider = document.getElementById("admin-0-line-width");
    const admin0WidthValueSpan = document.getElementById("admin-0-width-value");

    // Update the line color and width when the color picker or slider changes
    admin0ColorPicker.addEventListener("input", (e) => {
      if (map.getLayer("admin-0-boundary")) {
        map.setPaintProperty("admin-0-boundary", "line-color", e.target.value);
        localStorage.setItem("countryLineColor", e.target.value);
      }
    });

    admin0WidthSlider.addEventListener("input", (e) => {
      if (map.getLayer("admin-0-boundary")) {
        map.setPaintProperty(
          "admin-0-boundary",
          "line-width",
          parseFloat(e.target.value)
        );
        localStorage.setItem("countryLineWidth", e.target.value);
      }
      admin0WidthValueSpan.textContent = e.target.value;
    });

    // Handle admin boundary background layers
    const adminLayers = [
      "admin-0-boundary-bg",
      "admin-1-boundary-bg",
      "admin-2-boundary-bg",
    ];
    const adminToggles = [
      "admin-0-boundary-toggle",
      "admin-1-boundary-toggle",
      "admin-2-boundary-toggle",
    ];
    const adminKeys = ["countryToggle", "stateToggle", "countyToggle"];

    adminLayers.forEach((layer, index) => {
      if (map.getLayer(layer)) {
        const savedState = localStorage.getItem(adminKeys[index]) === "true";
        map.setLayoutProperty(
          layer,
          "visibility",
          savedState ? "visible" : "none"
        );
        document.getElementById(adminToggles[index]).checked = savedState;
      }

      document
        .getElementById(adminToggles[index])
        .addEventListener("change", (e) => {
          if (map.getLayer(layer)) {
            const visibility = e.target.checked ? "visible" : "none";
            map.setLayoutProperty(layer, "visibility", visibility);
            localStorage.setItem(adminKeys[index], e.target.checked);
          }
        });
    });

    // Reduce the width of admin boundary background layers
    if (map.getLayer("admin-0-boundary-bg")) {
      map.setPaintProperty("admin-0-boundary-bg", "line-width", 0.5);
    }
    if (map.getLayer("admin-1-boundary-bg")) {
      map.setPaintProperty("admin-1-boundary-bg", "line-width", 0.5);
    }
    if (map.getLayer("admin-2-boundary-bg")) {
      map.setPaintProperty("admin-2-boundary-bg", "line-width", 0.5);
    }

    // Function to manage road network layer order
    function updateRoadNetworkLayerOrder() {
      // Get all road network layers
      const roadNetworkLayers = [
        "primary-road-network",
        "secondary-road-network",
        "motorway-road-network",
        "motorway_link-road-network",
        "trunk-road-network",
        "tertiary-road-network",
        "street-road-network",
      ];

      // Get all administrative boundary layers and city labels
      const adminBoundaryLayers = [
        "admin-0-boundary",
        "admin-1-boundary",
        "admin-2-boundary",
        "settlement-minor-label",
        "settlement-major-label",
      ];

      // Move administrative boundary layers and city labels above road network layers
      adminBoundaryLayers.forEach((layer) => {
        if (map.getLayer(layer)) {
          roadNetworkLayers.forEach((roadLayer) => {
            if (map.getLayer(roadLayer)) {
              map.moveLayer(layer, roadLayer);
            }
          });
        }
      });
    }

    // Update road network layer order when map loads
    map.on("load", () => {
      updateRoadNetworkLayerOrder();
    });

    function createRoadNetworkControls(roadType) {
      const roadTypeLower = roadType.toLowerCase();
      const roadNetworkToggleId = `${roadTypeLower}-road-network-toggle`;
      const roadColorPickerId = `${roadTypeLower}-road-color`;
      const roadWidthSliderId = `${roadTypeLower}-road-width`;
      const roadWidthValueSpanId = `${roadTypeLower}-road-width-value`;
      const localStorageToggleKey = `${roadType}RoadNetworkToggle`;
      const localStorageColorKey = `${roadType}RoadColor`;
      const localStorageWidthKey = `${roadType}RoadWidth`;
      const layerId = `${roadTypeLower}-road-network`;

      const roadNetworkToggle = document.getElementById(roadNetworkToggleId);
      const roadColorPicker = document.getElementById(roadColorPickerId);
      const roadWidthSlider = document.getElementById(roadWidthSliderId);
      const roadWidthValueSpan = document.getElementById(roadWidthValueSpanId);

      // Load saved toggle state
      const savedRoadNetworkState =
        localStorage.getItem(localStorageToggleKey) === "true";
      roadNetworkToggle.checked = savedRoadNetworkState;

      // Update road network visibility when map loads
      map.on("load", () => {
        if (map.getLayer(layerId)) {
          const visibility = savedRoadNetworkState ? "visible" : "none";
          map.setLayoutProperty(layerId, "visibility", visibility);
        }
      });

      // Update road network visibility when toggle changes
      roadNetworkToggle.addEventListener("change", (e) => {
        if (map.getLayer(layerId)) {
          const visibility = e.target.checked ? "visible" : "none";
          map.setLayoutProperty(layerId, "visibility", visibility);
          localStorage.setItem(localStorageToggleKey, e.target.checked);
        }
      });

      // Update road color when color picker changes
      roadColorPicker.addEventListener("input", (e) => {
        if (map.getLayer(layerId)) {
          map.setPaintProperty(layerId, "line-color", e.target.value);
          localStorage.setItem(localStorageColorKey, e.target.value);
        }
      });

      // Update road width when slider changes
      roadWidthSlider.addEventListener("input", (e) => {
        if (map.getLayer(layerId)) {
          map.setPaintProperty(
            layerId,
            "line-width",
            parseFloat(e.target.value)
          );
          localStorage.setItem(localStorageWidthKey, e.target.value);
        }
        roadWidthValueSpan.textContent = e.target.value;
      });

      // Add road network layer to map
      map.addLayer({
        id: layerId,
        type: "line",
        source: "composite",
        "source-layer": "road",
        layout: {
          visibility: savedRoadNetworkState ? "visible" : "none",
        },
        filter: ["==", ["get", "class"], roadTypeLower],
      });

      // Load saved road color and width
      let savedRoadColor;
      let savedRoadWidth;
      switch (roadType) {
        case "Primary":
          savedRoadColor = localStorage.getItem(localStorageColorKey) || "#000";
          savedRoadWidth = localStorage.getItem(localStorageWidthKey) || 1;
          break;
        case "Secondary":
          savedRoadColor = localStorage.getItem(localStorageColorKey) || "#666";
          savedRoadWidth = localStorage.getItem(localStorageWidthKey) || 0.5;
          break;
        case "Motorway":
          savedRoadColor =
            localStorage.getItem(localStorageColorKey) || "#ff0000";
          savedRoadWidth = localStorage.getItem(localStorageWidthKey) || 2;
          break;
        case "Motorway_link":
          savedRoadColor =
            localStorage.getItem(localStorageColorKey) || "#ff0000";
          savedRoadWidth = localStorage.getItem(localStorageWidthKey) || 2;
          break;
        case "Trunk":
          savedRoadColor =
            localStorage.getItem(localStorageColorKey) || "#ff0000";
          savedRoadWidth = localStorage.getItem(localStorageWidthKey) || 2;
          break;
        case "Tertiary":
          savedRoadColor =
            localStorage.getItem(localStorageColorKey) || "#ff0000";
          savedRoadWidth = localStorage.getItem(localStorageWidthKey) || 2;
          break;
        case "Street":
          savedRoadColor = localStorage.getItem(localStorageColorKey) || "#ccc";
          savedRoadWidth = localStorage.getItem(localStorageWidthKey) || 0.2;
          break;
        default:
          savedRoadColor = "#000";
          savedRoadWidth = 1;
      }
      roadColorPicker.value = savedRoadColor;
      roadWidthSlider.value = savedRoadWidth;
      roadWidthValueSpan.textContent = savedRoadWidth;

      // Update road color and width
      map.setPaintProperty(layerId, "line-color", savedRoadColor);
      map.setPaintProperty(layerId, "line-width", parseFloat(savedRoadWidth));
    }

    // Create controls for each road type
    createRoadNetworkControls("Primary");
    createRoadNetworkControls("Secondary");
    createRoadNetworkControls("Motorway");
    createRoadNetworkControls("Motorway_link");
    createRoadNetworkControls("Tertiary");
    createRoadNetworkControls("Trunk");
    createRoadNetworkControls("Street");

    // Function to manage contour layer visibility and order
    function updateContourLayers(visible) {
      if (map.getLayer("contour-label") && map.getLayer("contour-line")) {
        const visibility = visible ? "visible" : "none";

        // Set visibility
        map.setLayoutProperty("contour-label", "visibility", visibility);
        map.setLayoutProperty("contour-line", "visibility", visibility);

        // If making visible, ensure proper layer order
        if (visible) {
          // Move contour layers to top
          map.moveLayer("contour-line");
          map.moveLayer("contour-label");
        }
      }
    }

    // Update contour visibility when map loads
    map.on("load", () => {
      const savedContourState =
        localStorage.getItem("contourToggle") === "true";
      updateContourLayers(savedContourState);
    });

    // Update contour visibility when toggle changes
    contourToggle.addEventListener("change", (e) => {
      updateContourLayers(e.target.checked);
      localStorage.setItem("contourToggle", e.target.checked);
    });

    // Ensure contours stay on top when satellite layer toggles
    document
      .getElementById("satellite-toggle")
      .addEventListener("change", () => {
        if (contourToggle.checked) {
          updateContourLayers(true);
        }
      });
  });
}
