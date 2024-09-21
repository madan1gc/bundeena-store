<?php
 function formatOffer($offers){
        $data = $offers->map(function($offers) {
            return $offers->map(function($offer) {
                return [
                    'price' => $offer->price,
                    'description' => $offer->description,
                    'image' => $offer->getImage(),
                    'from_date' => $offer->from_date,
                    'to_date' => $offer->to_date,
                    'publish' => $offer->publish,
                ];
            });
        });
    return $data;
 }

 function formattedService($services){
    $data = $services->map(function($service) {
            return [
                'title' => $service->title,
                'description' => $service->description,
                'image' => $service->getImage(),
                'publish' => $service->publish,
            ];
    });
    return $data;
 }

 function formattedStore($stores){
    $data = $stores->map(function($stores) {
        return $stores->map(function($product) {
            return [
                'title' => $product->title,
                'description' => $product->description,
                'image' => $product->getImage(),
                'publish' => $product->publish,
            ];
        });
    });

    return $data;
 }

 function formattedFuel($fuels){
    $data = $fuels->map(function($fuel) {
            return [
                'title' => $fuel->title,
                'price' => $fuel->price,
            ];
    });
    return $data;
 }