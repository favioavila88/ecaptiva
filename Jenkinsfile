pipeline {
  agent any
  
  stages {
    stage('Hello') {
      steps {
        bat 'echo hello'
      }
    }
    stage("linter") {
      when {
        anyOf {
          branch "feature*"
          branch "bug*"
        }
      }
      steps {
        bat 'echo executing linter'
      }
    }
  }
}
