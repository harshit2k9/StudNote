function showContent(subject) {
  const subjects = {
    mathematics: "Here are comprehensive Mathematics notes and resources.",
    science: "Explore our extensive Science materials and resources.",
    history: "Detailed notes and guides on various historical topics.",
    geography: "Comprehensive Geography notes for students.",
    english: "Literature and language resources for English.",
    computers: "Notes and tutorials on various computer science topics.",
    economics: "In-depth notes on Economics and related subjects.",
    physics: "Comprehensive notes and guides on Physics.",
    chemistry: "Detailed notes on Chemistry topics.",
    biology: "Extensive resources for Biology students."
  };

  alert(subjects[subject]);
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message. We will get back to you shortly.');
});
