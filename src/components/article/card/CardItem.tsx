import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

interface ICardProps {
    card: {
        title: string
        article: string
    }
}

const CardItem: React.FC<ICardProps> = ({card}) => (
    <Card sx={{minWidth: 275}} key={card.title}>
        <CardContent>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                {card.title}
            </Typography>
            <Typography variant="body2">
                {card.article}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
)


export default CardItem;