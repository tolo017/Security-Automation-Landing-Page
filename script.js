// Simple form handler for Netlify UX feedback.
// Netlify will receive the form submission; this just shows a local message.
function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  // Send via fetch to Netlify form endpoint
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString()
  })
  .then(() => {
    document.getElementById("formMessage").classList.remove("hidden");
    form.reset();
  })
  .catch((err) => {
    alert("Submission failed. You can also message on WhatsApp.");
    console.error(err);
  });

  return false;
}

// Prefill WhatsApp link with a small prompt if user clicks CTA (optional)
document.getElementById("waBtn").addEventListener("click", () => {
  // nothing additional for now; link is already correct
});
