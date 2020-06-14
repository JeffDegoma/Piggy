pipeline {
	// equivalent to docker build
	//build dockerfile
	agent dockerfile {
		image: 'dev.Dockerfile'
		dir: './'
	}
	stages {
		stage('checkout') {
			//git repos should be dynamic
			git 'https://github.com/JeffDegoma/Piggy.git'
		}
	}
}