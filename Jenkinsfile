pipeline {
	// equivalent to docker build
	//build dockerfile
	agent any
	stages {
		stage('checkout') {
			//git repos should be dynamic
			steps{
			git 'https://github.com/JeffDegoma/Piggy.git'
			}
		}
	}
}