def buildDocker () {
    echo 'building docker image'
            sh "docker-compose -f docker-compose.yml up --build"
        
}

return this