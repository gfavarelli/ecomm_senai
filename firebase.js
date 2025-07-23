// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoUyM3OSFwAR8j5V93yv1aBIcjOFmaXoI",
  authDomain: "ecommsenai.firebaseapp.com",
  projectId: "ecommsenai",
  storageBucket: "ecommsenai.firebasestorage.app",
  messagingSenderId: "1046291510849",
  appId: "1:1046291510849:web:7b305c3ed7afc1242738c0",
  measurementId: "G-SHYG2J7PSL",
  databaseURL: "https://ecommsenai-default-rtdb.firebaseio.com"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Função para listar produtos do Firebase
export async function listarProdutos() {
  const produtosRef = ref(db, 'produtos/');
  const snapshot = await get(produtosRef);
  if (snapshot.exists()) {
    const produtos = Object.values(snapshot.val());
    console.log("PRodutos", produtos);
    return produtos;
  } else {
    return [];
  }
}
