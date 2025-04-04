#!/bin/bash

touch ./dist/.htaccess
echo "AuthType Basic" >> ./dist/.htaccess
echo "AuthName \"Restricted Area\"" >> ./dist/.htaccess
echo "AuthUserFile /usr/local/apache2/htdocs/.htpasswd" >> ./dist/.htaccess
echo "Require valid-user" >> ./dist/.htaccess

touch ./dist/.htpasswd
echo "staging:\$2y\$10\$9/BYR6K30ASNG6t0s3qAIuRg1hvpxcljYfpFLBW5KtL4K4RObaNUC" >> ./dist/.htpasswd

