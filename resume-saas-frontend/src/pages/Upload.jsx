import React from 'react'

const Upload = () => {
  return (
    <div>
      <h1>Upload Your Resume</h1>
      <p>Use the form below to upload your resume for analysis.</p>
      <form>
        <input type="file" accept=".pdf,.doc,.docx" />
        <button type="submit">Upload</button>
      </form>
      <p>Supported formats: PDF, DOC, DOCX</p>
    </div>
  )
}

export default Upload
