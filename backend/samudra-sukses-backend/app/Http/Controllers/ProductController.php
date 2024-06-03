<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::where('is_approved', true)->get();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'description' => 'required|string',
        ]);

        $path = $request->file('image')->store('public/images');
        $url = Storage::url($path);

        $product = Product::create([
            'name' => $request->name,
            'image' => $url,
            'price' => $request->price,
            'stock' => $request->stock,
            'description' => $request->description,
            'is_approved' => false,
        ]);

        return response()->json($product, 201);
    }

    public function approve($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product->is_approved = true;
        $product->save();

        return response()->json($product);
    }

    public function pending()
    {
        $products = Product::where('is_approved', false)->get();
        return response()->json($products);
    }
}
