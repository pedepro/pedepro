// Importa os scripts do Firebase
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Inicialize o Firebase no Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyCcHEhgVHPtB4HThK2z22k8YxZ-Pdu9nbo",
  authDomain: "pedepro-56693.firebaseapp.com",
  projectId: "pedepro-56693",
  storageBucket: "pedepro-56693.appspot.com",
  messagingSenderId: "861754870046",
  appId: "1:861754870046:web:562bfb3c2de34d2d20210f"
});

// Inicializa o serviço de mensagens
const messaging = firebase.messaging();

// Gerenciar notificações em segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log('Mensagem em segundo plano recebida: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icone.png' // Substitua pelo caminho do seu ícone
  };

  // Mostra a notificação
  self.registration.showNotification(notificationTitle, notificationOptions);
});