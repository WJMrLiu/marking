<template>
  <div>
    <el-row style="margin-top: 20px;">
      <el-col :span="12" :offset="6">
        <el-form
          :model="foodForm"
          :rules="rules"
          ref="foodForm"
          label-width="110px"
          class="form base_form"
        >
          <el-form-item label="身份证号" prop="name">
            <el-input v-model="foodForm.name" disabled></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="activity">
            <el-input v-model="foodForm.activity" disabled></el-input>
          </el-form-item>
          <el-form-item label="附件类型" prop="attributes">
            <el-select
              v-model="foodForm.attributes"
              style="width:100%;"
              placeholder="请选择"
            >
              <el-option
                v-for="item in attributes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上传图片" style="padding-top: 5rem;">
            <el-upload
              :file-list="fileList"
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :auto-upload="false"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-success="handleSuccess"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog
              :visible.sync="dialogVisible"
              :append-to-body="true"
              :close-on-click-modal="false"
            >
              <img width="100%" :src="dialogImageUrl" alt="MDN" />
            </el-dialog>
          </el-form-item>
          <el-form-item>
            <el-button type="info" @click="addFood('foodForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodForm: {
        name: "",
        description: "",
        image_path: "",
        activity: "",
        attributes: ""
      },
      rules: {
        attributes: [
          { required: true, message: "请选择附件类型", trigger: "change" }
        ]
      },
      attributes: [
        {
          value: "1",
          label: "生活照骗"
        },
        {
          value: "2",
          label: "艺术照骗"
        }
      ],
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  created() {},
  methods: {
    addFood(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("foodForm", formName);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log("file", file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    addCategoryFun() {
      this.showAddCategory = !this.showAddCategory;
    },
    uploadImg(res) {
      if (res.status == 1) {
        this.foodForm.image_path = res.image_path;
      } else {
        this.$message.error("上传图片失败！");
      }
    },
    beforeImgUpload(file) {
      const isRightType =
        file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isRightType) {
        this.$message.error("图片格式不正确!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isRightType && isLt2M;
    },
    addspecs() {
      this.foodForm.specs.push({ ...this.specsForm });
      this.specsForm.specs = "";
      this.specsForm.packing_fee = 0;
      this.specsForm.price = 20;
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style lang="less">
@import "../Style/mixin";
.form {
  min-width: 400px;
  margin-bottom: 30px;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
    border-radius: 6px;
    transition: all 400ms;
  }
}
.base_form {
  border: 1px solid #eaeefb;
  padding: 50px 20px 20px;
  background-color: #fff;
}
.form_header {
  text-align: center;
  margin-bottom: 10px;
}
.category_select {
  border: 1px solid #eaeefb;
  padding: 10px 30px 10px 10px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.add_category_row {
  height: 0;
  overflow: hidden;
  transition: all 400ms;
  background: #f9fafc;
}
.showEdit {
  height: 185px;
}
.add_category {
  background: #f9fafc;
  padding: 10px 30px 0px 10px;
  border: 1px solid #eaeefb;
  border-top: none;
}
.add_category_button {
  text-align: center;
  line-height: 40px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 1px solid #eaeefb;
  border-top: none;
  transition: all 400ms;
  &:hover {
    background: #f9fafc;
    span,
    .edit_icon {
      color: #20a0ff;
    }
  }
  span {
    .sc(14px, #999);
    transition: all 400ms;
  }
  .edit_icon {
    color: #ccc;
    transition: all 400ms;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
.cell {
  text-align: center;
}
</style>
