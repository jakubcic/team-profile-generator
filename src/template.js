const renderCard = data => {
  // initialize
  let icon;
  let roleSpecificData;

  if (data.role === "Manager") {
    icon = `<i class="bi bi-cup-hot-fill"></i>`
    roleSpecificData = `Office Number: ${data.officeNumber}`
  } else if (data.role === "Engineer") {
    icon = `<i class="bi bi-eyeglasses"></i>`
    roleSpecificData = `Github: <a target="_blank" href="https://github.com/${data.github}">github.com/${data.github}</a>`
  } else if (data.role === "Intern") {
    icon = `<i class="bi bi-mortarboard"></i>`
    roleSpecificData = `School: ${data.school}`
  }

return `
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="card shadow mb-5 bg-white rounded-2">
              <div class="card-header bg-primary">
                <h4 class="text-white">${data.name}</h4>
                <h5 class="text-white">${icon} ${data.role}</h5>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">Employee ID: ${data.id}</li>
                  <li class="list-group-item">
                    Email: <a href="mailto:${data.email}">${data.email}</a>
                  </li>
                  <li class="list-group-item">${roleSpecificData}</li>
                </ul>
              </div>
            </div>
          </div>
`
};



const renderPage = (teamCards) => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Portfolio</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
  />
  </head>

  <body>

    <header class="d-flex justify-content-center py-5 mb-4 border-bottom bg-danger">
      <h1 class="text-white"><strong>My Team</strong></h1>
    </header>

    <main>
      <div class="container-body container-xxl justify-center">
        <div class="row">
        ${teamCards}
        </div>
      </div>

    </main>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous">
    </script>

  </body>
</html>
`;

};

module.exports.renderCard = renderCard;
module.exports.renderPage = renderPage;