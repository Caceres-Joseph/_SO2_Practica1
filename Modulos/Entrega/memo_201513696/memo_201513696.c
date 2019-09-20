#include <linux/module.h>
#include <linux/moduleparam.h>
#include <linux/init.h>
#include <linux/kernel.h>   
#include <linux/proc_fs.h>  

#include <linux/module.h>
#include <linux/proc_fs.h>
#include <linux/seq_file.h>  
 

#include <linux/fs.h>
#include <linux/kernel.h> 
#include <linux/utsname.h>

#define BUFSIZE  100
 
 

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Modulo de Memoria RAM");
MODULE_AUTHOR("Jhosef-201513696");
 
static struct proc_dir_entry *ent;
 
static int hello_proc_show(struct seq_file *m, void *v) {
   
	struct sysinfo si;  
 
	int total = si.totalram/(1024*1024);
	int libre= si.freeram / (1024*1024);
	int porcentaje = (libre/total);


	seq_printf(m, "+---------------------------\n"); 
	seq_printf(m, "| Carné:201513696\n"); 
	seq_printf(m, "| Nombre:Jhosef Cáceres\n"); 
	seq_printf(m, "| Release:Debian 9");
	seq_printf(m, "| Total ram MB: %i\n",total);
	seq_printf(m, "| Memoria libre MB: %i\n",libre); 
	seq_printf(m, "+---------------------------\n");
	return 0;
}

static int hello_proc_open(struct inode *inode, struct  file *file) {
  return single_open(file, hello_proc_show, NULL);
}

static ssize_t mywrite(struct file *file, const char __user *ubuf,size_t count, loff_t *ppos) 
{
	printk( KERN_DEBUG "write handler\n");
	return -1;
}
 
static ssize_t myread(struct file *file, char __user *ubuf,size_t count, loff_t *ppos) 
{
	printk( KERN_DEBUG "read handler\n");
	return 0;
}
 
static struct file_operations myops = 
{
	.owner = THIS_MODULE,
  	.open = hello_proc_open,
  	.read = seq_read,
	.write = mywrite,
};
 
static int simple_init(void)
{

    printk(KERN_INFO "201513696\n");
	ent=proc_create("memo_201513696",0660,NULL,&myops);
	return 0;
}
 
static void simple_cleanup(void)
{

  printk(KERN_INFO "Sistemas operativos 1\n");
	proc_remove(ent);
}
 
module_init(simple_init);
module_exit(simple_cleanup);
