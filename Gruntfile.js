module.exports = function(grunt) {

  grunt.initConfig({
    cssmin:{
      "stylesheets/application.min.css":
      [
        "stylesheets/bootstrap.min.css",
        "stylesheets/bootstrap-responsive.min.css",
        "stylesheets/application.css"
      ]
    },
    shell: {
      delFile:{
        command: "rm -rf stylesheets/application.min.css"
      }
    }
  });


  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-shell");

  grunt.registerTask("default", ["shell:delFile", "cssmin"]);
};