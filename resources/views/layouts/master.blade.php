<!DOCTYPE html>
<html lang="en"
    data-assets-path="{{ asset('assets/') }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
    <title>Score It</title>
    <meta name="description" content="" />
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('../../assets/img/logos/ScoreItLogo.jpg') }}" />
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <!-- Icons -->
    <link href="{{ asset('assets/vendor/fonts/fontawesome.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/vendor/fonts/tabler-icons.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/vendor/fonts/flag-icons.css') }}" rel="stylesheet" />
    <!-- Core CSS -->
    <link href="{{ asset('assets/vendor/css/rtl/core.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/demo.css') }}" rel="stylesheet" />
    <!-- Vendors CSS -->
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/rtl/theme-default.css') }}"
        class="template-customizer-theme-css" />
    <link href="{{ asset('assets/vendor/libs/node-waves/node-waves.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/vendor/libs/typeahead-js/typeahead.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/vendor/libs/apex-charts/apex-charts.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/vendor/libs/swiper/swiper.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}"
        rel="stylesheet" />
    <link href="{{ asset('assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css') }}"
        rel="stylesheet" />
    <link href="{{ asset('assets/vendor/libs/toastr-main/toastr.min.css') }}" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/flatpickr/flatpickr.css ') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.css ') }}" />
    <link rel="stylesheet"
        href="{{ asset('assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.css ') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/jquery-timepicker/jquery-timepicker.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/pickr/pickr-themes.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/bs-stepper/bs-stepper.css ') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/bootstrap-select/bootstrap-select.css ') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/select2/select2.css ') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.css ') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/sweetalert2/sweetalert2.css ') }}" />

    <!-- Page CSS -->
    <link href="{{ asset('assets/vendor/css/pages/cards-advance.css') }}" rel="stylesheet" />
    <!-- Helpers -->
    <script src="{{ asset('assets/js/config.js') }}"></script>
    <script src="{{ asset('assets/vendor/js/helpers.js') }}"></script>

    {{-- <script src="{{ asset('assets/vendor/js/template-customizer.js ') }}"></script> --}}
    @yield('pageCss')
    <style>
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        label,
        input,
        button {
            font-family: 'Jost', sans-serif !important;
        }
    </style>
</head>

<body>

    {{-- ✅ Show only when user is logged in --}}
    @if(Auth::check())
        {{-- Navbar --}}
        <header class="fixed-top">
            <div class="container">
                @include('layouts.navbar')
            </div>
        </header>

        <div class="container-fluid">
            <div class="row">
                {{-- Sidebar --}}
                <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar pt-5 vh-100 border-end">
                    @include('layouts.sidebar')
                </nav>

                {{-- Main Content --}}
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                    @yield('content')
                </main>
            </div>
        </div>
    @else
        {{-- 🧩 For guest pages like login/register --}}
        <main class="container py-5">
            @yield('content')
        </main>
    @endif

    {{-- Optional global scripts --}}
    @stack('scripts')
    <!-- Core JS -->
    <script src="{{ asset('assets/vendor/libs/jquery/jquery.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/popper/popper.js') }}"></script>
    <script src="{{ asset('assets/vendor/js/bootstrap.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/node-waves/node-waves.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/hammer/hammer.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/i18n/i18n.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/typeahead-js/typeahead.js') }}"></script>
    <script src="{{ asset('assets/vendor/js/menu.js') }}"></script>


    <!-- Vendors JS -->
    <script src="{{ asset('assets/vendor/libs/apex-charts/apexcharts.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/swiper/swiper.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/block-ui/block-ui.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/jstree/jstree.js') }}"></script>
    <script src="{{ asset('assets/js/extended-ui-treeview.js') }}"></script>
    <script src="{{ asset('https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js') }}"></script>

    <script src="{{ asset('assets/vendor/libs/bs-stepper/bs-stepper.js ') }}"></script>
    <script src="{{ asset('assets/vendor/libs/autosize/autosize.js ') }}"></script>
    <script src="{{ asset('assets/vendor/libs/cleavejs/cleave.js ') }}"></script>
    <script src="{{ asset('assets/vendor/libs/cleavejs/cleave-phone.js ') }}"></script>
    <script src="{{ asset('assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.js ') }}"></script>
    <script src="{{ asset('assets/vendor/libs/jquery-repeater/jquery-repeater.js ') }}"></script>
    <script src="{{ asset('assets/vendor/libs/sweetalert2/sweetalert2.js') }}"></script>
    <script src="{{ asset('assets/js/forms-selects.js ') }}"></script>
    <script src="{{ asset('assets/vendor/libs/moment/moment.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/flatpickr/flatpickr.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/jquery-timepicker/jquery-timepicker.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/pickr/pickr.js') }}"></script>


    <!-- Main JS -->
    <script src="{{ asset('assets/js/main.js') }}"></script>
    <script src="{{ asset('assets/js/extended-ui-blockui.js') }}"></script>
    <script src="{{ asset('assets/js/extended-ui-perfect-scrollbar.js') }}"></script>


    <!-- Page JS -->
    <script src="{{ asset('assets/js/dashboards-analytics.js') }}"></script>
    <script src="{{ asset('assets/js/forms-extras.js ') }}"></script>
    <script src="{{ asset('assets/js/extended-ui-sweetalert2.js') }}"></script>

    <!-- Page JS -->
    <script src="{{ asset('assets/js/dashboards-analytics.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/@form-validation/popular.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/@form-validation/bootstrap5.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/@form-validation/auto-focus.js') }}"></script>

    <!-- Page JS -->
    <script src="{{ asset('assets/js/form-validation.js') }}"></script>
    <script src="{{ asset('assets/js/tables-datatables-basic.js') }}"></script>
    <script src="{{ asset('assets/js/cards-actions.js') }}"></script>

    <script src="{{ asset('assets/vendor/libs/bootstrap-select/bootstrap-select.js ') }}"></script>
    <script src="{{ asset('assets/vendor/libs/select2/select2.js ') }}"></script>
    <script src="{{ asset('assets/js/form-wizard-numbered.js ') }}"></script>
    <script src="{{ asset('assets/js/form-wizard-validation.js ') }}"></script>
    <script src="{{ asset('assets/js/forms-editors.js ') }}"></script>
    <script src="{{ asset('assets/js/forms-pickers.js') }}"></script>
    <script src="{{ asset('assets/js/form-basic-inputs.js') }}"></script>


</html>