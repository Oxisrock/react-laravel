<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Object_;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        try {
            $customers = Customer::orderBy('id', 'desc')->get();
            $response['data'] = $customers;
            $response['message'] = 'Load list customers';
            $response['status'] = 200;
            return response()->json($response,200);
        } catch (\Exception $e) {
            response()->json($e->getMessage(),400);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
        try {

        } catch (\Exception $e) {
            response()->json($e->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        try {
            $customer = new Customer;
            $customer->first_name = $request->first_name;
            $customer->last_name = $request->last_name;
            $customer->dni = $request->dni;
            $customer->email = $request->email;
            $customer->city = $request->city;
            $customer->direction = $request->address;
            $customer->phone = $request->phone;
            $customer->save();
            $response['data'] = $customer;
            $response['message'] = 'Register success';
            $response['success'] = true;
            $response['status'] = 201;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['status'] = 401;
            $response['success'] = false;
        }
        return response()->json($response);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        try {

            $customer = Customer::findOrFail($id);

            if ($customer) {
                $response['data'] = $customer;
                $response['message'] = "Load successful";
                $response['success'] = true;
            }
            else {
                $response['data'] = null;
                $response['message'] = "Not found data id => $id";
                $response['success'] = false;
            }

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        try {
            $customer['first_name'] = $request->first_name;
            $customer['last_name'] = $request->last_name;
            $customer['dni'] = $request->dni;
            $customer['email'] = $request->email;
            $customer['city'] = $request->city;
            $customer['direction'] = $request->address;
            $customer['phone'] = $request->phone;
            $data = Customer::where("id",$id)->update($customer);
            $response['data'] = $data;
            $response['message'] = "update successful";
            $response['success'] = true;
        }catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        try {
            $data = Customer::where("id",$id)->delete();
            $response['data'] = $data;
            $response['message'] = "Delete successful";
            $response['success'] = true;
        }catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
