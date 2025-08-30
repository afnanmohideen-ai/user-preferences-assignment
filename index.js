const mongoose = require('mongoose');
const UserPreference = require('./schema'); // This path must match your schema file

mongoose.connect('mongodb://127.0.0.1:27017/preferencesApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function run() {
  try {
    const pref = new UserPreference({
      userId: new mongoose.Types.ObjectId(), // Mock user ID for testing
      theme: 'dark',
      language: 'fr',
      notifications: {
        email: false,
        sms: true,
        push: false
      }
    });

    const result = await pref.save();
    console.log('Saved:', result);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    mongoose.connection.close();
  }
}

run();
