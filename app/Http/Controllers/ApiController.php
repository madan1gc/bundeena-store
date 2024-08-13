<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductModel;
use App\Models\StoreModel;
use App\Models\Service;
use App\Models\Fuel;

class ApiController extends Controller
{
    public function index(){
        $offers = ProductModel::all()->groupBy('category');
        $formattedOffers =  formatOffer($offers);
        
        $services = Service::all()->groupBy('category');
        $formattedServices =  formattedService($services);
        
        $stores = StoreModel::all()->groupBy('category');
        $formattedStores =  formattedStore($stores);

        $fuels = Fuel::all()->groupBy('category');
        $formattedFuels =  formattedFuel($fuels);
        
        $responseData = [
            'offers' => $formattedOffers,
            'services' => $formattedServices,
            'stores' => $formattedStores,
            'fuels' => $formattedFuels,
        ];

        return $responseData;

    }
}
