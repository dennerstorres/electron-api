

class Config {
    //=======================================================================================
  
    async geral(req, res) {
        return res.send('Deu certo!');
      };
    

}

module.exports = new Config();