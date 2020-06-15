def gv
pipeline {
	// equivalent to docker build
	//build dockerfile
	agent any
	stages {
		stage('init') {
			steps {
				script {
					gv = load "script.groovy"
				}
			}
		}
		stage('checkout') {
			steps {
				checkout scm
			}
		}
		stage('Docker') {
			steps {
				script {
					gv.buildDocker()
				}
			}
		}
	}
}