var Snowman = require('../snowman');
describe( "A snowman", function(){

  //My winter wonderland is a friendly place, so I want each snowman to have a name.
  it( "should have a name", function(){
	var olaf = new Snowman("Olaf");
    expect( olaf.name ).toBeDefined();
  });

  //In order for it to really be a snowman, it needs to have a carrot nose.
  it("should have a carrot nose", function () {
  	var olaf = new Snowman("Olaf");
    expect ( olaf.features ).toContain("carrot nose");
  });

  //It also needs stick arms.
  it("should have stick arms", function () {
  	var olaf = new Snowman("Olaf");
    expect ( olaf.features ).toContain("stick arms");

  });
//Olaf can talk
  it("should be able to say Hello World", function () {
  	var talk = new Snowman("Olaf");
  	expect ( talk.features ).toContain("Hello World");
  });

  //Olaf likes summers as favorite season
it("should be love's Summer", function () {
  	var summer = new Snowman("Olaf");
  	expect ( summer.features ).toContain("summer");
  });
  //If the snowman is named Olaf, he should like warm hugs.
  describe( "a snowman named Olaf", function(){
it( "should like warm hugs", function(){
      var frosty = new Snowman("Frosty");
      var olaf = new Snowman("Olaf");
      expect( olaf.hug() ).toBe( "I like warm hugs!" );
      expect( frosty.hug() ).not.toBe( "I like warm hugs!" );
    });
  });
  describe("A magical snowman"), function(){
  	it ("should not be able to run!", function(){
  		var frosty = new Snowman("Frosty", true);
  	}
  }
});