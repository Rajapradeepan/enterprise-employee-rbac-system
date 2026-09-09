export function getDashboardData(req, res) {
    res.status(200).json({
        "status": true,
        "message": "Data Fetched Successfully",
        "data": []
    });
} 