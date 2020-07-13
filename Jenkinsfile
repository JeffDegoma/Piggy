def gv
pipeline {
	agent any
	stages {
		stage('checkout') {
			steps {
				checkout scm
			}
		}
		stage('init') {
			steps {
				script {
					gv = load "script.groovy"
				}
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