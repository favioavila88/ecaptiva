pipeline {
  agent any
  
  stages {
    stage('Hello') {
      steps {
        bat 'echo hello'
      }
    }
    stage('linter') {
      when {
        branch 'feature/*'
      }
      steps {
        bat 'echo executing linter test'
      }
    }
  }
}
