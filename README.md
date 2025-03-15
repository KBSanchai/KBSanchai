<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Your GitHub Profile</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      background-color: #0d1117;
      color: #c9d1d9;
      padding: 2rem;
    }
    .container {
      max-width: 900px;
      margin: auto;
    }
    .profile-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    .profile-header img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 2px solid #30363d;
    }
    .profile-info h1 {
      font-size: 2rem;
      color: #fff;
    }
    .profile-info p {
      margin-top: 0.5rem;
      color: #8b949e;
    }
    .section {
      margin-top: 2rem;
    }
    .section h2 {
      border-bottom: 1px solid #30363d;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    .repo {
      background: #161b22;
      padding: 1rem;
      border-radius: 6px;
      margin-bottom: 1rem;
      border: 1px solid #30363d;
    }
    .repo h3 {
      color: #58a6ff;
      margin-bottom: 0.5rem;
    }
    .repo p {
      color: #8b949e;
    }
    a {
      color: #58a6ff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="profile-header">
      <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Profile Picture" />
      <div class="profile-info">
        <h1>Your Name</h1>
        <p>@yourusername</p>
        <p>🌍 Location | 💼 Role | 🚀 Passion</p>
      </div>
    </div>

    <div class="section">
      <h2>📂 Projects</h2>
      <div class="repo">
        <h3><a href="#">Awesome Project</a></h3>
        <p>A brief description of what this project does and why it's cool.</p>
      </div>
      <div class="repo">
        <h3><a href="#">Another Project</a></h3>
        <p>Maybe a tool, an app, or some code you’re proud of.</p>
      </div>
    </div>

    <div class="section">
      <h2>📫 Contact</h2>
      <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
      <p>LinkedIn: <a href="#">linkedin.com/in/yourprofile</a></p>
      <p>GitHub: <a href="#">github.com/yourusername</a></p>
    </div>
  </div>
</body>
</html>
