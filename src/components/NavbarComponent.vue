<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Vue Router</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 w-100">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">購物車</router-link>
          </li>
          <li class="nav-item me-auto">
            <router-link to="/admin/products" class="nav-link">後台產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">登入</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
