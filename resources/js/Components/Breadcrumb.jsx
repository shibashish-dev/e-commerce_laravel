import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Breadcrumbs, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumb = () => {
    const { url } = usePage(); // Get current URL
    const segments = url.split('/').filter(segment => segment !== ''); // Extract route segments

    return (
        <div className="container py-4">
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {/* Home Link */}
                <Link
                    href={route('home')}
                    className="text-primary text-base"
                    color="primary"
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
                    Home
                </Link>

                {segments.map((segment, index) => {
                    // Check if it's the last segment
                    const isLast = index === segments.length - 1;
                    const formattedSegment = segment.replace(/-/g, ' ');

                    return isLast ? (
                        <Typography key={index} color="textPrimary" sx={{ textTransform: 'capitalize' }}>
                            {formattedSegment}
                        </Typography>
                    ) : (
                        <Link
                            key={index}
                            color="primary"
                            underline="hover"
                            className="text-primary text-base"
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {formattedSegment}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </div>
    );
};

export default Breadcrumb;
