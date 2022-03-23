<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmplyeesController extends Controller
{
    public function index()
    {
        try {
            $employees = Employee::all();
            return response()->json($employees);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //update
    public function update(Request $request)
    {
        try {
            $id = $request->get('emplouyeeid');
            $name = $request->get('emplyeename');
            $salary = $request->get('emplyeesalary');

            Employee::where('id', $id)->update([
                'name' => $name,
                'salary' => $salary
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    //add
    public function store(Request $request)
    {
        try {
            $name = $request->get('emplyeename');
            $salary = $request->get('emplyeesalary');

            Employee::create([
                'name' => $name,
                'salary' => $salary
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }


    //delete emplouyee
    public function destroy($id)
    {

        try {
            $employee = Employee::find($id);
            $employee->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
