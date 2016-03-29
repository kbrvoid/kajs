var Token = require("../token");

module.exports = function(stream) {

  stream.each(function() {
    Token.current_token = this

    if(this.text == "print") {
      var word = "console.log"


      var token = new Token.word(word)
      token.was_print_symbol = true
      this.replaceWith(token)
      return token
    }
  })
}

