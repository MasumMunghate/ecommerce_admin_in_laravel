<?php

return [
    [
        'title' => 'Dashboard',
        'route' => 'admin.dashboard',
    ],
    [
        'title' => 'Products',
        'route' => 'products.list',
        'submenu' => [
            [
                'title' => 'Add Product',
                'route' => 'products.create',
            ],
            [
                'title' => 'All Products',
                'route' => 'products.list',
            ],
        ],
    ],
    [
        'title' => 'Notes',
        'route' => 'notes',
        'sub_product' => [
            'id' => '1',
            'name' => 'Add Product',
            'show' => 'All products'
        ],
    ],
    [
        'title' => 'Sales',
        'route' => 'sales',
    ],
    // [
    //     'title' => 'Customers',
    //     'route' => 'customers',
    // ],
    //  [
    //     'title' => 'Sellers',
    //     'route' => 'sellers',
    // ],
    // [
    //     'title' => 'Upload Files',
    //     'route' => 'upload.files',
    // ],
];
