QUnit.test( "clave murcielago", function( assert ) {
  var clave = 'murcielago'

  var cases = [
    {
      expected: 's391ts',
      msg: 'scouts'
    },
    {
      expected: 'h967',
      msg: 'hola'
    },
    {
      expected: '0707',
      msg: 'mamá'
    },
    {
      expected: '5n q15 5s31567 v7s',
      msg: 'en que escuela vas'
    }
  ]

  for(tcase in cases){
    var expected = cases[tcase].expected
    var msg = cases[tcase].msg

    var actual = encrypt(clave, msg)
    assert.deepEqual( actual, expected, "Passed!" );

  }
});
