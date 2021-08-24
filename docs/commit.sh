git pull
git add *.yaml
git commit -m "update to file"
git push
git rev-parse HEAD
COMMIT_ID=$(git rev-parse --verify HEAD)
echo ${COMMIT_ID} is the last hash
docker run -p 8087:80 -e SPEC_URL=https://raw.githubusercontent.com/rishagit/cicd-oas/${COMMIT_ID}/docs/neustar-cicd.yaml -e PAGE_TITLE="Neustar CICD" -e PAGE_FAVICON="https://raw.githubusercontent.com/rishagit/cicd-oas/main/docs/neustar-favicon.png" redocly/redoc
