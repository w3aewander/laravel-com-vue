@extends("layouts.treinamento")

@section('content')


<header-component></header-component>
<navbar-component></navbar-component>

<div class="container py-5">

    <example-component></example-component>

    <a class="btn btn-success btn-sm" href="{{route('teste')}}"> Outra página </a>

</div>

<footer-component></footer-component>

@endsection