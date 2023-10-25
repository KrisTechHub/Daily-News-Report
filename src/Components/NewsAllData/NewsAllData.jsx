import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";
import './NewsAllData.css'

const NewsAllData = ({data}) => {
    const { newsCategory, newsDescription, newsPreviewImage, newsTitle } = data;

    return (
        <Card className="max-w-[24rem] overflow-hidden mx-1 my-1">
            <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none newsImg" >
                <img src={newsPreviewImage} alt={newsTitle} />
            </CardHeader>

            <CardBody>
                <Typography variant="h5" color="blue-gray">
                    {newsTitle}
                </Typography>
                <Typography variant="p" color="gray" className="mt-3 font-normal">
                    {newsDescription.slice(0,120)}
                </Typography>
            </CardBody>

            <CardFooter className="flex items-center justify-between">
                <Typography className="font-normal capitalize"><span className="font-semibold">Category: </span>{newsCategory}</Typography>
            </CardFooter>
        </Card>
    );
};


export default NewsAllData;