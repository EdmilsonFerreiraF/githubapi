import React from 'react'

function Home() {
  return (
    <div>
                        <h1 class="display-4 text-center selector">
                    Github API
                </h1>

                <h2 class="display-6 h3 text-center">
                    A API do Github para obter dados de usuário e repositórios
                </h2>
        <div>
          Pesquise por um usuário do Github, por um repositório ou pelos repositórios mais visitados por um usuário.
        </div>
        <div>
            Buscar por um usuário
            <div>Saiba mais sobre um usuário</div>

        </div>
        <div>
            Exibir um repositório
            <div>Acesse um repositório, assim como você faria no site do Github</div>

        </div>
        <div>
            Exibir os repositórios mais visitados por um usuário
            <div>Descubra o que mais um usuário vê</div>

        </div>

        <div class="card-group container">
          <div class="card p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-person-lines-fill mx-auto mb-3" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>
            <div class="card-body">
              <h5 class="card-title text-center">Buscar por um usuário</h5>
              <p class="card-text text-center">Saiba mais sobre um usuário</p>
            </div>
          </div>
          <div class="card p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-archive-fill mx-auto mb-3" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>
            <div class="card-body">
              <h5 class="card-title text-center">Exibir um repositório</h5>
              <p class="card-text text-center">Acesse um repositório, assim como você faria no site do Github</p>
            </div>
          </div>
          <div class="card p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-list-task mx-auto mb-3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
  <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
</svg>
            <div class="card-body">
              <h5 class="card-title text-center">Exibir repositórios mais visitados por um usuário</h5>
              <p class="card-text text-center">Descubra o que mais um usuário vê</p>
            </div>
          </div>
</div>
        
        <div>Comece agora</div>
        <a href="https://github.com/login/oauth/authorize?client_id=Iv1.26c8f4033c6654ae&redirect_uri=http://localhost:3000/login/callback">Login pelo Github</a>
    </div>
  );
}

export default Home;