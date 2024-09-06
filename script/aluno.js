function salvar() {
    console.log("chegou no javascript");
    function salvar() {
        const nome_aluno = document.getElementById(nome_aluno);
       
      
        var headers = new Headers();    
        headers.append("Content-Type", "application/json");
        headers.append('Access-Control-Allow-Origin', "http://127.0.0.1:5500");
      
        fetch('localhost:8080/aluno/inserir',{
      
          method: "POST",
          mode: "cors", 
          cache: "no-cache",
         
          
          body: JSON.stringify({ nome: nome_aluno }),
      
          headers: headers
      
          
        }).then(response => {
      
          if(response.ok) {
      
            
            console.log('Foi no servidor e voltou');
      
            
            window.location.href = 'sucesso.html'    
          } else {
            
            console.log('Aconteceu algo que não foi possivel salvar');
      
            
            throw new Error('Erro ao tentar salvar');
          }
      
        })
      
        .catch(error => console.error('Erro!:', error));
         
      
      }
}


function consultar() {

  console.log("chegou no javascript");
  function salvar() {
      const nome_aluno = document.getElementById(nome_aluno);
     
    
      var headers = new Headers();    
      headers.append("Content-Type", "application/json");
      headers.append('Access-Control-Allow-Origin', "http://127.0.0.1:5500");
    
      fetch('localhost:8080/aluno/inserir',{
    
        method: "POST",
        mode: "cors", 
        cache: "no-cache",
       
        
        body: JSON.stringify({ nome: nome_aluno }),
    
        headers: headers
    
        
      }).then(response => {
    
        if(response.ok) {
    
          
          console.log('Foi no servidor e voltou');
    
          
          window.location.href = 'sucesso.html'    
        } else {
          
          console.log('Aconteceu algo que não foi possivel salvar');
    
          
          throw new Error('Erro ao tentar salvar');
        }
    
      })
    
      .catch(error => console.error('Erro!:', error));
       
    
    }




}


function alterar() {
  console.log("chegou no javascript");
  function salvar() {
      const nome_aluno = document.getElementById(nome_aluno);
     
    
      var headers = new Headers();    
      headers.append("Content-Type", "application/json");
      headers.append('Access-Control-Allow-Origin', "http://127.0.0.1:5500");
    
      fetch('localhost:8080/aluno/inserir',{
    
        method: "POST",
        mode: "cors", 
        cache: "no-cache",
       
        
        body: JSON.stringify({ nome: nome_aluno }),
    
        headers: headers
    
        
      }).then(response => {
    
        if(response.ok) {
    
          
          console.log('Foi no servidor e voltou');
    
          
          window.location.href = 'sucesso.html'    
        } else {
          
          console.log('Aconteceu algo que não foi possivel salvar');
    
          
          throw new Error('Erro ao tentar salvar');
        }
    
      })
    
      .catch(error => console.error('Erro!:', error));
       
    
    }
}

function apagar() {
  console.log("chegou no javascript");
    function salvar() {
        const nome_aluno = document.getElementById(nome_aluno);
       
      
        var headers = new Headers();    
        headers.append("Content-Type", "application/json");
        headers.append('Access-Control-Allow-Origin', "http://127.0.0.1:5500");
      
        fetch('localhost:8080/aluno/inserir',{
      
          method: "POST",
          mode: "cors", 
          cache: "no-cache",
         
          
          body: JSON.stringify({ nome: nome_aluno }),
      
          headers: headers
      
          
        }).then(response => {
      
          if(response.ok) {
      
            
            console.log('Foi no servidor e voltou');
      
            
            window.location.href = 'sucesso.html'    
          } else {
            
            console.log('Aconteceu algo que não foi possivel salvar');
      
            
            throw new Error('Erro ao tentar salvar');
          }
      
        })
      
        .catch(error => console.error('Erro!:', error));
         
      
      }
}