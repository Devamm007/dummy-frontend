<template>
  <div class="offline-container">
    <header>
      <h1>EcoChamps</h1>
      <p>Offline Mode</p>
    </header>
    
    <main>
      <section>
        <h2>Downloaded Missions</h2>
        <ul>
          <li>Quiz: Identify Recyclable Materials (PDF)</li>
          <li>Task: Sketch a water-saving invention</li>
        </ul>
        <p>Complete these and submit them when you're back online!</p>
      </section>
      
      <section>
        <h2>Lite Leaderboard (Last Synced)</h2>
        <ol>
            <li>Sarah P. - 1800 XP</li>
            <li>Alex Green - 1250 XP</li>
            <li>Mike L. - 1100 XP</li>
        </ol>
      </section>
    </main>
    
    <footer>
        <p>You appear to be offline. Some features are disabled.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Simple, text-first styling for low bandwidth */
.offline-container {
  font-family: sans-serif;
  line-height: 1.6;
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
}
header, footer {
  text-align: center;
  color: #555;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
footer {
    margin-top: 20px;
    border-top: 1px solid #ddd;
    border-bottom: none;
    font-style: italic;
}
section {
  margin: 20px 0;
}
h2 {
    color: #333;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
}
</style>