<?php

namespace App\Http\Controllers;

use App\Http\Resources\Test\TestMinifiedResource;
use App\Http\Resources\Test\TestResource;
use App\Models\Test;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
    public function index(): array
    {
        $tests = Auth::user()->tests;

        return TestMinifiedResource::collection($tests)->resolve();
    }

    public function show(Test $test)
    {
        return TestResource::make($test)->resolve();
    }
}
