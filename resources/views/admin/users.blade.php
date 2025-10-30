

<!-- @extends('layouts.master') -->
<!-- @section('title', 'All Users') -->
<!-- @section('content') -->
<div class="text-primary">
  <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
      <div class="navbar-nav align-items-center">
        <div class="nav-item dropdown-style-switcher dropdown">
          <a
          class="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
          href="javascript:void(0);"
          data-bs-toggle="dropdown">
          <i class="ti ti-md"></i>
      </a>
      <ul class="dropdown-menu dropdown-menu-start dropdown-styles">
        <li>
          <a class="dropdown-item" href="javascript:void(0);" data-theme="light">
            <span class="align-middle"><i class="ti ti-sun me-3"></i>Light</span>
        </a>
    </li>
    <li>
      <a class="dropdown-item" href="javascript:void(0);" data-theme="dark">
        <span class="align-middle"><i class="ti ti-moon-stars me-3"></i>Dark</span>
    </a>
</li>
<li>
  <a class="dropdown-item" href="javascript:void(0);" data-theme="system">
    <span class="align-middle"><i class="ti ti-device-desktop-analytics me-3"></i>System</span>
</a>
</li>
</ul>
</div>
</div>

<ul class="navbar-nav flex-row align-items-center ms-auto">
    <!-- User -->
    <li class="nav-item navbar-dropdown dropdown-user dropdown">
      <a
      class="nav-link dropdown-toggle hide-arrow p-0"
      href="javascript:void(0);"
      data-bs-toggle="dropdown">
      <div class="avatar avatar-online">
          <img src="../../assets/img/avatars/1.png" alt class="rounded-circle" />
      </div>
  </a>
  <ul class="dropdown-menu dropdown-menu-end">
    <li>
      <a class="dropdown-item mt-0" href="#">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0 me-2">
            <div class="avatar avatar-online">
              <img src="../../assets/img/avatars/1.png" alt class="rounded-circle" />
          </div>
      </div>
      <div class="flex-grow-1">
        <h6 class="mb-0">John Doe</h6>
        <small class="text-muted">Admin</small>
    </div>
</div>
</a>
</li>
<li>
  <div class="dropdown-divider my-1 mx-n2"></div>
</li>
<li>
  <a class="dropdown-item" href="#">
    <i class="ti ti-user me-3 ti-md"></i><span class="align-middle">My Profile</span>
</a>
</li>
<li>
  <a class="dropdown-item" href="#">
    <i class="ti ti-settings me-3 ti-md"></i><span class="align-middle">Settings</span>
</a>
</li>
<li>
  <a class="dropdown-item" href="#">
    <span class="d-flex align-items-center align-middle">
      <i class="flex-shrink-0 ti ti-file-dollar me-3 ti-md"></i>
      <span class="flex-grow-1 align-middle">Billing</span>
      <span class="flex-shrink-0 badge bg-danger d-flex align-items-center justify-content-center"
      >4</span
      >
  </span>
</a>
</li>
<li>
  <div class="dropdown-divider my-1 mx-n2"></div>
</li>
<li>
  <div class="d-grid px-2 pt-2 pb-1">
    <a class="btn btn-sm btn-danger d-flex" href="javascript:void(0);">
      <small class="align-middle">Logout</small>
      <i class="ti ti-logout ms-2 ti-14px"></i>
  </a>
</div>
</li>
</ul>
</li>
<!--/ User -->
</ul>
</div>
</div>

<!-- @endsection -->