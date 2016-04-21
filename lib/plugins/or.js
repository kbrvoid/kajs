var Token = require("../token");

module.exports = function(stream) {

  stream.each(function() {
    Token.current_token = this

    if(this.text == "or") {
      var word = "||"


      var token = new Token.word(word)
      token.was_or_word = true
      this.replaceWith(token)
      return token
    }
  })
}

