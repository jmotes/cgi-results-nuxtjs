<template>
  <div>
    <header class="site-header" role="banner">

      <nav class="navbar navbar-expand-lg navbar-light bg-faded d-flex sticky-top">
        <div class="container">
          <a class="site-title navbar-brand" href="/">
            <img src="/cgi-results.jpg" width="180" alt="Site title goes here">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav-items" aria-controls="main-nav-items" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div id="main-nav-items" class="collapse navbar-collapse">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link px-md-3" href="/about/">About Us</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link px-md-3" href="/services/">Services</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link px-md-3" href="/results/">Results</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link px-md-3" href="/careers/">Careers</a>
              </li>
              <li class="nav-item ml-3">
                  <a class="btn btn-primary text-white text-uppercase" href="/contact/"><i class="fa fa-phone mr-2" aria-hidden="true"></i>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <nuxt/>

    <footer class="site-footer py-4">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-6 d-flex">
            <span class="w-100 my-auto text-white text-uppercase text-center text-md-left">&copy; 2018 Company Name Here. All Rights Reserved.</span>
          </div>
          <div class="col d-flex">
            <span class="mx-auto ml-md-auto mr-md-0 my-auto text-uppercase text-center text-md-right">
              <a class="text-white" href="#">Privacy Policy</a>
              <span class="text-muted">/</span>
              <a class="text-white" href="#">Contact Us</a>
            </span>
          </div>
          <div class="col-md-auto d-flex">
            <ul class="social-media-list mx-auto ml-md-2 my-4 my-md-auto">
                <li>
                  <a href="#" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="https://twitter.com/twitter-slug-here" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<style lang="scss">

  // Bootstrap overrides
  $font-family-sans-serif:    Poppins, sans-serif;
  $font-family-base:          $font-family-sans-serif;
  $enable-rounded:            false;
  $blue:                    #0857ad;
  $font-weight-bold:          900;
  $font-size-base:            0.9375rem; // 15px
  $h4-font-size:              1.4rem;
  $nav-link-padding-x:        0.1rem;
  $navbar-light-color:        rgba(#000,.9);
  $navbar-light-hover-color:  rgba(#000,.6);
  $navbar-light-active-color: rgba(#000,.5);

  // Custom variables
  $font-weight-normal:        400;

  @import "~bootstrap/scss/bootstrap";

  html {
    position: relative;
    min-height: 100%;
  }

  body {
    /* Push body above sticky footer */
    margin-bottom: 84px;
  }

  img {
    max-width: 100%;
  }

  .navbar {
    border-bottom: 4px solid theme-color("primary");
  }

  .jumbotron {
    background-size: cover;
    background-position: center;

    p {
      font-size: 18px;
    }

    .btn-outline-light {
      &:hover {
        background-color: theme-color("primary");
      }
    }
  }

  .jumbotron-overlay {
    padding: 20px 0;
    min-height: 500px;
  }

  // TODO: remove this once merged into beta
  .position-relative {
    position: relative;
  }

  a.show-on-hover {
    text-decoration: none;
    transition: all 0.3s;
    opacity: 0;
    &:hover {
      opacity: 1;
      background-color: rgba(theme-color("primary"),.5);
    }
  }

  .post-title {
    position: relative;
  }

  .post-title:after {
    content: '';
    position: absolute;
    height: 4px;
    width: 100px;
    left: 50%;
    bottom: -20px;
    margin-left: -50px;
    background-color: #ccc;
  }

  .post-content {
    blockquote p {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
    }
  }

  .site-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
    height: 84px;
    border-top: 2px solid $gray-500;
    background-color: $gray-900;
    font-size: 12px;
  }

  .social-media-list {
    padding-left: 0;
    list-style-type: none;

    li {
      display: inline-block;
      margin-left: 5px;
    }

    .fa {
      font-size: 34px;
      color: $gray-600;
      transition: color 0.3s;

      &:hover {
        color: $white;
      }
    }
  }
</style>
