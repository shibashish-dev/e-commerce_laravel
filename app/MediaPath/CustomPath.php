<?php

namespace App\MediaPath;

use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class CustomPath implements PathGenerator
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }



    /**
     * Get the path for the given media, relative to the root storage path.
     */
    public function getPath(Media $media): string
    {
        // Example: Store media files in storage/app/public/uploads/{model_type}/{model_id}/
        $modelType = strtolower(class_basename($media->model));
        $modelId = $media->model->getKey();
        $collection = $media->collection_name;

        return match ($collection) {
            'categories' => "uploads/categories/category_{$modelId}/",
            'products' => "uploads/products/product_{$modelId}/",
            'product_gallery' => "uploads/products/product_{$modelId}/gallery/",
            'ads' => "uploads/ads/ad_{$modelId}/image/",
            'features' => "uploads/features/feature_{$modelId}/",
            'articles' => "uploads/articles/article_{$media->id}/",
            'profile' => "uploads/user/profile_{$modelId}/",
            default => "uploads/{$modelType}/{$modelId}/media_{$media->id}/",
        };

    }

    /**
     * Get the path for conversions of the given media, relative to the root storage path.
     */
    public function getPathForConversions(Media $media): string
    {
        // Store conversions in a 'conversions' subdirectory
        return $this->getPath($media) . 'conversions/';
    }

    /**
     * Get the path for responsive images of the given media, relative to the root storage path.
     */
    public function getPathForResponsiveImages(Media $media): string
    {
        // Store responsive images in a 'responsive' subdirectory
        return $this->getPath($media) . 'responsive/';
    }
}
