<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function fetchAllUsers()
    {
        return view('admin.users');
    }

    public function dashboard()
    {
        return view('admin.dashboard');
    }
    public function addProduct()
    {
       return view('admin.products.products-add');
    }

    public function listProducts()
    {
       return view('admin.products.productList');
    }
}
