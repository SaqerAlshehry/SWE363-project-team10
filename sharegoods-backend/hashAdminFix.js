import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Admin from './models/Admin.js'; // تأكد من المسار الصحيح إذا كان مختلف

const MONGO_URI = 'mongodb+srv://sharegoods_project:IntegrationCat@sharegoods-cluster.dfjv1fo.mongodb.net/SharegoodsDB?retryWrites=true&w=majority&appName=Sharegoods-Cluster';

const fixPassword = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    const plainPassword = '12345678'; // كلمة المرور الحالية
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const result = await Admin.updateOne(
      { email: 's202012345@kfupm.edu.sa' }, // نفس الإيميل اللي في الصورة
      { $set: { password: hashedPassword } }
    );

    if (result.modifiedCount > 0) {
      console.log('✅ Password hashed and updated successfully');
    } else {
      console.log('⚠️ Admin not found or already hashed');
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
};

fixPassword();
