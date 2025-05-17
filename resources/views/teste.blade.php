@extends('layouts.treinamento')

@section('content')

<header-component></header-component>

<div class="container py-5">
    
<teste-component></teste-component>
    <a class="btn btn-primary btn-sm" href="{{route('inicio')}}">Inicio</a>
    
</div>

<footer-component></footer-component>

@endsection