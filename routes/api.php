<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/customer/list', 'App\Http\Controllers\Api\CustomerController@index');

Route::post('/customer/create', 'App\Http\Controllers\Api\CustomerController@store');


Route::get('/customer/get/{id}', 'App\Http\Controllers\Api\CustomerController@show');

Route::put('/customer/update/{id}', 'App\Http\Controllers\Api\CustomerController@update');

Route::delete('/customer/delete/{id}', 'App\Http\Controllers\Api\CustomerController@destroy');
