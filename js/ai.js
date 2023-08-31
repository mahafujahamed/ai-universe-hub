const loadTools = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(res => res.json())
      .then(data => displayTools(data.data.tools));
  }
  
  const displayTools = tools => {
    const toolsContainer = document.getElementById('tools-container');
    tools.forEach(tool => {
     
      const toolDiv = document.createElement('div');
      toolDiv.classList.add('col');
      toolDiv.innerHTML = `
      <div class="card h-100">
      <img src="${tool.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5>Features</h5>
        <ol>
        <li>${tool.features[0]}</li>
        <li>${tool.features[1]}</li>
        <li>${tool.features[2]}</li>
        </ol>
        <hr>
          <h5 class="card-title">${tool.name}</h5>
          <p><i class="fa-solid fa-calendar-days"></i> ${tool.published_in}</p>
          <div>
            <button onclick="loadToolDetail(${tool.id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#toolDetails">
            <i class="fa-regular fa-arrow-right"></i>
          </button>
          </div>
        </div>
      </div>
    </div>
      `
      toolsContainer.appendChild(toolDiv);
    });
  }
  
  
  
  const loadToolDetail = id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayToolDetails(data.data))
    // .catch(error => error(data));
  }
  
  const displayToolDetails = toolsDe => {
    const toolDetails = document.getElementById('toolDetailsBody');
    toolDetails.innerHTML = `
      <img src="${tool.image}">
    `
  }
  
  loadTools();