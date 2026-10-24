export function validateContact(form) {
  const errors = {};
  if (form.name.trim().length < 2)
    errors.name = "Please enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!form.topic) errors.topic = "Please choose a topic.";
  if (form.message.trim().length < 10)
    errors.message = "Please add a message with at least 10 characters.";
  return errors;
}
