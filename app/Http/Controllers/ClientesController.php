<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Cliente;
use App\Http\Requests\CreateClienteRequest;

class ClientesController extends Controller
{
    public function all()
    {
        $clientes = Cliente::all();
        return response()->json([
            "clientes" => $clientes
        ], 200);
    }

    public function get($id)
    {
        $cliente = Cliente::whereId($id)->first();
        return response()->json([
            "cliente" => $cliente
        ], 200);
    }

    public function new(CreateClienteRequest $request)
    {
        $cliente = Cliente::create($request->only(["nombre", "email", "telefono", "direccion"]));
        return response()->json([
            "cliente" => $cliente
        ], 200);
    }
}
