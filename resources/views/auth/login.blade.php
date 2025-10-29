@extends('layouts.master')

@section('content')

<div class="container w-75 d-flex flex-column justify-content-center align-items-center mt-5">
    <h4>Admin Login Form</h4>

    <form method="POST" action="{{ route('user.login') }}">
        @csrf
        <div class="input-group flex-nowrap mb-3">
            <span class="input-group-text">@</span>
            <input type="email" name="email" class="form-control" placeholder="Email">
        </div>

        <div class="input-group flex-nowrap mb-3">
            <input type="password" name="password" class="form-control" placeholder="Password">
        </div>

        <input class="btn btn-primary" type="submit" value="Login">
    </form>
</div>

@endsection
